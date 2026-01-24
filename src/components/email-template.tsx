import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  message,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333', maxWidth: '600px', margin: '0 auto' }}>
    <h2 style={{ color: '#2563eb', marginBottom: '20px' }}>New Contact Form Submission</h2>
    <div style={{ backgroundColor: '#f9fafb', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
      <p style={{ margin: '8px 0' }}><strong>Name:</strong> {fullName}</p>
      <p style={{ margin: '8px 0' }}><strong>Email:</strong> <a href={`mailto:${email}`} style={{ color: '#2563eb', textDecoration: 'none' }}>{email}</a></p>
    </div>
    <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
      <h3 style={{ color: '#111827', marginTop: '0' }}>Message:</h3>
      <p style={{ whiteSpace: 'pre-wrap', color: '#374151' }}>{message}</p>
    </div>
  </div>
);
