import { useState, useEffect } from "react";
import { ChangePasswordDialog } from "./change-password";
import { VerificationCodeDialog } from "./verification-code";
import NewPasswordDialog from './new-password';

interface PasswordResetFlowProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PasswordResetFlow({ open, onOpenChange }: PasswordResetFlowProps) {
  const [currentStep, setCurrentStep] = useState('email');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    console.log('[PasswordResetFlow] currentStep:', currentStep, 'dialog open:', open);
  }, [currentStep, open]);

  const handleEmailSubmit = async (email: string): Promise<void> => {
    setUserEmail(email);
    setCurrentStep('verification');
  };

  const handleCodeVerified = () => {
    setCurrentStep('new-password');
  };

  const handlePasswordChanged = () => {
    onOpenChange(false); // Close the entire flow after password change
  };

  const handleBack = () => {
    if (currentStep === 'verification') {
      setCurrentStep('email');
    } else if (currentStep === 'new-password') {
      setCurrentStep('verification');
    }
  };

  const handleClose = () => {
    onOpenChange(false); // Close the entire flow
  };

  const handleResendCode = async () => {
    try {
      console.log('Resending verification code to:', userEmail);
    } catch (error) {
      console.error('Failed to resend verification code:', error);
    }
  };

  return(
    <>
      {currentStep === 'email' && (
        <ChangePasswordDialog 
          onEmailSubmit={handleEmailSubmit}
        />
      )}

      {currentStep === 'verification' && (
        <VerificationCodeDialog
          email={userEmail}
          onVerify={handleCodeVerified}
          onBack={handleBack}
          onResend={handleResendCode}
        />
      )}

      {currentStep === 'new-password' && (
        <NewPasswordDialog
          onPasswordChange={handlePasswordChanged}
          onClose={handleClose}
        />
      )}
    </>
  )
}