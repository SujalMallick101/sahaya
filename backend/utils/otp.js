const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");
const redis = require("../config/redisClient");

// Generate a 4-digit numeric OTP
const generateOTP = () => {
    return otpGenerator.generate(4, {
        lowerCaseAlphabets: false,
        upperCaseAlphabets: false,
        specialChars: false,
    });
};

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "bosesumit058@gmail.com",  // Sender's email
        pass: "jops qmym uwrh rucq",  // App password from Google
    },
});

// Function to send OTP via email
exports.sendmail = async (email, type) => {
    try {
        // Check if OTP was recently requested (Rate Limiting)
        const otpRequestedRecently = await redis.get(`user:${email}:otp_requested`);
        if (otpRequestedRecently) {
            console.log(`OTP request blocked for ${email} (Too many requests)`);
            return { success: false, message: "You can request a new OTP after 1 minute." };
        }

        // Generate OTP
        let OTP = generateOTP();

        // Store OTP in Redis for the user (expires in 5 minutes)
        await redis.setex(`user:${email}:otp`, 300, OTP);

        // Set rate limiting flag (expires in 60 seconds)
        await redis.setex(`user:${email}:otp_requested`, 60, "true");

        const mailOptions = {
            from: '"Unified Welfare India" <bosesumit058@gmail.com>',
            to: email,
            subject: type === "signup"
                ? "🛡️ Unified Welfare Portal - OTP Verification"
                : "🔐 Unified Welfare Portal - Password Reset OTP",
            html: type === "signup"
                ? `
                    <div style="font-family: Arial, sans-serif; max-width: 520px; margin: auto; padding: 20px; border: 1px solid #ccc; border-radius: 8px; background-color: #f5faff;">
                        <h2 style="text-align: center; color: #003366;">Unified Access to Government Welfare</h2>
                        <p>Dear Citizen,</p>
                        <p>Thank you for registering on the <strong>Unified Welfare Portal</strong>, an initiative to simplify access to government welfare schemes and benefits.</p>
                        <p>To complete your registration, please enter the following One-Time Password (OTP):</p>
                        <div style="text-align: center; font-size: 22px; font-weight: bold; background: #007bff; color: #fff; padding: 12px; border-radius: 6px; width: fit-content; margin: 14px auto;">
                            ${OTP}
                        </div>
                        <p>This OTP is valid for <strong>5 minutes</strong>. Please do not share it with anyone for your safety.</p>
                        <p>If you did not initiate this request, please disregard this message.</p>
                        <br>
                        <p style="color: #555;">Warm regards,</p>
                        <p><strong>Unified Welfare Team</strong><br>Ministry of Social Justice and Empowerment</p>
                    </div>
                `
                : `
                    <div style="font-family: Arial, sans-serif; max-width: 520px; margin: auto; padding: 20px; border: 1px solid #ccc; border-radius: 8px; background-color: #fef7f7;">
                        <h2 style="text-align: center; color: #8B0000;">Reset Your Unified Welfare Portal Password</h2>
                        <p>Dear Citizen,</p>
                        <p>We received a request to reset your password for the <strong>Unified Welfare Portal</strong>. Please use the following OTP to proceed:</p>
                        <div style="text-align: center; font-size: 22px; font-weight: bold; background: #dc3545; color: #fff; padding: 12px; border-radius: 6px; width: fit-content; margin: 14px auto;">
                            ${OTP}
                        </div>
                        <p>This OTP is valid for <strong>5 minutes</strong>. If you did not request a password reset, no further action is required.</p>
                        <br>
                        <p style="color: #555;">Warm regards,</p>
                        <p><strong>Unified Welfare Team</strong><br>Ministry of Social Justice and Empowerment</p>
                    </div>
                `,
        };


        // Send email
        const info = await transporter.sendMail(mailOptions);

        console.log("OTP sent to:", email, "Message ID:", info.messageId);
        return { success: true, message: "OTP sent successfully!" };

    } catch (err) {
        console.error("Error sending email:", err);
        return { success: false, message: "Error sending OTP." };
    }
};




// OTP Verification
exports.verifyOTP = async (OTP, inputOTP) => {
    try {
        if (!OTP || !inputOTP) return false;

        if (OTP !== inputOTP) return false;

        // Clear OTP after successful verification 
        return true;
    } catch (err) {
        console.log("Error in verifying OTP:", err.message);
        return false;
    }
};