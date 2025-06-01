import React from "react";

interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormReturn {
  formState: ContactFormState;
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export const useContactForm = (): ContactFormReturn => {
  const [formState, setFormState] = React.useState<ContactFormState>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [error, setError] = React.useState("");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    // Validate form
    if (!formState.name || !formState.email || !formState.message) {
      setError("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return {
    formState,
    isSubmitting,
    isSubmitted,
    error,
    handleChange,
    handleSubmit
  };
};
