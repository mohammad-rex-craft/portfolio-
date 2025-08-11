import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const schema = yup.object({
  name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
  email: yup.string().required('Email is required').email('Email is invalid'),
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters')
});

type FormData = yup.InferType<typeof schema>;

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: FormData) => {


    emailjs.send('service_tstk2tu', 'template_ot3k4nz', {
      from_name: data.name,
      from_email: data.email,
      phone: data.subject,
      message: data.message,
      to_email: 'mohammad123alhalabi123@gmail.com'
    }, 'tTBlMgrEDcnj26VxH')
      .then((response:any) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert('Email sent successfully!');
      }, (error:any) => {
        console.error('Failed to send email:', error);
        alert('Failed to send email');
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mohammad123alhalabi123@gmail.com',
      href: 'mailto:mohammad123alhalabi123@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+20 1094221030',
      href: 'tel:+201094221030'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Egypt, Giza',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gray-800/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-orbitron font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can
            bring your ideas to life with cutting-edge technology and creative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-orbitron font-bold mb-6 text-neon-blue">
                Let's Connect
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with
                talented individuals. Whether you have a specific project in mind
                or just want to chat about technology, feel free to reach out.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 p-4 glass rounded-lg neon-purple hover:neon-blue transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="glass rounded-2xl p-6 neon-blue">
              <h4 className="text-lg font-orbitron font-bold mb-4 text-neon-blue">
                Response Time
              </h4>
              <p className="text-gray-300 text-sm">
                I typically respond within 24 hours. For urgent inquiries,
                please call or mention "URGENT" in your subject line.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-2xl p-8 neon-blue">
            <h3 className="text-2xl font-orbitron font-bold mb-6 text-neon-blue">
              Send Message
            </h3>

            <div className="space-y-6">
              <div>
                <label className="block text-gray-300 font-medium mb-2">Name</label>
                <input
                  type="text"
                  {...register('name')}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">Email</label>
                <input
                  type="email"
                  {...register('email')}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">Subject</label>
                <input
                  type="text"
                  {...register('subject')}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
                  placeholder="Project inquiry"
                />
                {errors.subject && (
                  <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  {...register('message')}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none resize-none transition-colors duration-300"
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                ) : (
                  <Send size={20} />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}