// import 
import { Input, Text, Button, Card } from '../../components';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

// Login component

const Login = ({onLoginSuccess}: {onLoginSuccess: (token: string) => void}) => {
  // use Navigate router hook
  const router = useRouter();

  // interface for form props
  interface FormProps {
    email: string;
    password: string;
  }

  // useFormik hook
  const formMik = useFormik<FormProps>({
    initialValues: {
      email: '',
      password: '',
    },

    // validation for username, email & password
    validationSchema: yup.object({
      // name: yup.string().required('name tidak boleh kosong'),
      email: yup
        .string()
        .email('Email tidak valid')
        .required('Email tidak boleh kosong'),
      password: yup
        .string()
        .min(8, 'Password minimal 8 karakter')
        .required('Password tidak boleh kosong'),
    }),

    // onSubmit function for login form
    onSubmit: async (values) => {
      try {
        const response = await fetch(
          'https://revou-final-project-be-group-d-production.up.railway.app/login',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          }
        );
        // if response is ok, you can use it here
        const data = await response.json();
        // set token to local storage
        localStorage.setItem('token', data.access_token);
        // get token from local storage
        const token = data.access_token;
        // call onLoginSuccess function
        onLoginSuccess(token);
        // navigate to home page
        // router.push('/');
      } catch (error) {
        // catch any network error or any error thrown in the fetch call
        console.log(
          'There has been a problem with your fetch operation: ' +
            (error as Error).message
        );
      }
    },
  });
  console.log(formMik);
  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      {/* Left: Image */}
      <div className="w-1/2 h-screen hidden lg:block">
        <Image
          className="object-cover w-full h-full"
          src={`/assets/Mesin_filter_air.webp`}
          width={500}
          height={500}
          alt="Filter Penyaring Kran Air"
        />
      </div>

      {/* Right: Form */}
      <Card
        border={false}
        className="flex items-center justify-center min-h-screen bg-gray-200 "
      >
        <Card border className="p-10 bg-white shadow-lg rounded-lg">
          <form
            onSubmit={formMik.handleSubmit}
            className="space-y-6"
            data-testid="login-form"
          >
            {/* email */}
            <div className="space-y-2">
              <Text className="font-bold text-lg text-black text-center">
                {'Email'}
              </Text>
              <Input
                className="block border-emerald-700 border w-full p-2 rounded-lg"
                name={'email'}
                value={formMik.values.email}
                onChange={formMik.handleChange('email')}
                placeholder="Email Address"
              />
              {formMik.errors.email && <Text>{formMik.errors.email}</Text>}
            </div>

            {/* <!-- Password --> */}
            <div className="space-y-2">
              <Text className="font-bold text-lg text-black text-center">
                {'Password'}
              </Text>
              <Input
                className="block border-emerald-700 border w-full p-2 rounded-lg text"
                name={'password'}
                type={'password'}
                value={formMik.values.password}
                onChange={formMik.handleChange('password')}
                placeholder="Password"
              />
              {formMik.errors.password && (
                <Text>{formMik.errors.password}</Text>
              )}
            </div>

            {/* <!-- Login Button --> */}
            <div className="flex justify-between items-center">
              <Button
                label={'Login'}
                type={'submit'}
                className="block w-full bg-indigo-600 mt-8 py-2 hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2 text-center"
              />
            </div>

          </form>
          {/* <!-- Sign up  Link --> */}
          <Link href="/register" className="text-blue-500 flex justify-center">
            Sign up Here
          </Link>
        </Card>
      </Card>
    </div>
  );
};

export default Login;