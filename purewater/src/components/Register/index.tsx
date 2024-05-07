import { Input, Text, Button, Card } from '../../components';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

const Register = () => {
  const router = useRouter();

  interface FormProps {
    email: string;
    username: string;
    password: string;
  }

  const formMik = useFormik<FormProps>({
    initialValues: {
      email: '',
      username: '',
      password: '',
    },

    onSubmit: async (values) => {
      await fetch(
        'https://revou-final-project-be-group-d-production.up.railway.app/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        }
      );

      router.push('/login');
    },

    validationSchema: yup.object({
      username: yup.string().required('Username tidak boleh kosong'),
      email: yup
        .string()
        .email('Email harus valid')
        .required('Email tidak boleh kosong'),
      password: yup
        .string()
        .min(8, 'Password harus setidaknya berisi 8 karakter')
        .required('Password tidak boleh kosong'),
    }),
  });

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      {/* Left: Image */}
      <div className="w-1/2 h-screen hidden lg:block">
        <Image
          className="object-cover w-full h-full"
          src={`/assets/Mesin_reverse_osmosis.webp`}
          width={500}
          height={500}
          alt="carousell-1"
        />
      </div>
      {/* Right: Form */}
      <Card
        border={false}
        className="flex items-center justify-center min-h-screen bg-gray-200 "
      >
        <Card border className="p-10 bg-white shadow-lg rounded-lg">
          <form onSubmit={formMik.handleSubmit} className="space-y-4">
            {/* Username section */}
            <div>
              <Text className="block font-semibold text-emerald-700">
                Username
              </Text>
              <Input
                className="w-full px-3 py-2 border-emerald-700 border rounded-md"
                name={'username'}
                value={formMik.values.username}
                onChange={formMik.handleChange('username')}
              />

              {formMik.errors.username && (
                <Text className="text-red-500">{formMik.errors.username}</Text>
              )}
            </div>

            <div>
              <Text className="block font-semibold text-emerald-700">
                Email
              </Text>
              <Input
                className="w-full px-3 py-2 border-emerald-700 border rounded-md"
                name={'email'}
                value={formMik.values.email}
                onChange={formMik.handleChange('email')}
              />

              {formMik.errors.email && (
                <Text className="text-red-500">{formMik.errors.email}</Text>
              )}
            </div>

            <div>
              <Text className="block font-semibold text-emerald-500">
                Password
              </Text>
              <Input
                className="w-full px-3 py-2 border-emerald-700 border rounded-md"
                name={'password'}
                type={'password'}
                value={formMik.values.password}
                onChange={formMik.handleChange('password')}
              />

              {formMik.errors.password && (
                <Text className="text-red-500">{formMik.errors.password}</Text>
              )}
            </div>

            <div>
              <Button
                label={'Submit'}
                type={'submit'}
                className={'w-full bg-green-500 text-white rounded-md py-2'}
              />
            </div>
          </form>
          {/* <!-- Already Sign up  Link --> */}
          <Link href="/login" className="text-blue-500 text-center">
              Already have an account? Login Here
          </Link>
        </Card>
      </Card>
    </div>
  );
};

export default Register;
