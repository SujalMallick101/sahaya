// twilioClient.js
require('dotenv').config();
const twilio = require('twilio');

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const sendOTP = async (phoneNumber) => {
  try {
    const verification = await client.verify.v2
      .services(process.env.TWILIO_VERIFY_SERVICE_SID)
      .verifications.create({ to: phoneNumber, channel: 'sms' });

    console.log('OTP sent:', verification.sid);
    return verification;
  } catch (error) {
    console.error('Error sending OTP:', error.message);
    throw error;
  }
};

const verifyOTP = async (phoneNumber, otp) => {
  try {
    const verification_check = await client.verify.v2
      .services(process.env.TWILIO_VERIFY_SERVICE_SID)
      .verificationChecks.create({ to: phoneNumber, code: otp });

    return verification_check;
  } catch (error) {
    console.error('Error verifying OTP:', error.message);
    throw error;
  }
};

module.exports = { sendOTP, verifyOTP };
