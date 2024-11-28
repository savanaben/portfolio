import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import TextContainer from './components/TextContainer';
import Heading from './components/Heading';
import Paragraph from './components/Paragraph';
import Link from './components/Link';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');

    try {
      await emailjs.sendForm(
        'service_m1kfge1',
        'template_uxlvvgm',
        formRef.current,
        'tBd9w8URhcnwumndj'
      );
      setStatus('success');
      formRef.current.reset();
    } catch (error) {
      setStatus('error');
      console.error('Error:', error);
    }
  };

  return (
    <TextContainer size="2xl">
      <Heading level={2} alignment="center" color='#00719c' visualLevel="h2">
        Contact me
      </Heading>
      
      <Paragraph className="text-center">
       Feel free to message me below, or you can reach out via <Link href="https://www.linkedin.com/in/benjamin-gross-762b761b5/">LinkedIn</Link>.
      </Paragraph>


      <div className="mt-8">
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg text-gray-700">
              Your name
            </label>
            <input
              type="text"
              name="user_name"
              id="name"
              required
              className="mt-2 block w-full rounded-lg border-solid border-2 border-gray-400 focus:border-blue-500 focus:ring-blue-500 p-3 text-lg"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="email"
              required
              className="mt-2 block w-full rounded-lg border-solid border-2 border-gray-400 focus:border-blue-500 focus:ring-blue-500 p-3 text-lg"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={4}
              className="mt-2 block w-full rounded-lg border-solid border-2 border-gray-400 focus:border-blue-500 focus:ring-blue-500 p-3 text-lg"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full inline-flex justify-center rounded-lg border border-transparent bg-purple-600 py-3 px-6 text-lg font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:opacity-50 transition-colors duration-200"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <Paragraph className="text-green-600 font-bold text-center" overrideMargin>
              Thanks for your message! I&apos;ll get back to you soon.
            </Paragraph>
          )}
          
          {status === 'error' && (
            <Paragraph className="text-red-600 font-bold text-center" overrideMargin>
              There was an error sending your message. Please try again.
            </Paragraph>
          )}
        </form>
      </div>
    </TextContainer>
  );
};

export default Contact;