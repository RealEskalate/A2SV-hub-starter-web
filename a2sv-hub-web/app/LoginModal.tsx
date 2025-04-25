'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { PasswordInput } from '@/components/ui/passsword-input'

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters long' })
    .regex(/[a-zA-Z0-9]/, { message: 'Password must be alphanumeric' }),
})

export function LoginModal() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
        console.log(values)
        toast(
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                <code className="text-white">{JSON.stringify(values, null, 2)}</code>
            </pre>,
        )
        window.location.href = '/home'
    } catch (error) {
        console.error('Form submission error', error)
        toast.error('Failed to submit the form. Please try again.')
    }
}

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='bg-[#25C05A] hover:bg-[#007B55] transition-colors text-white text-lg font-semibold px-7 py-4 rounded-full'>
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] ">
        <DialogHeader>
          <DialogTitle className="text-2xl">Sign in into A2SV Hub</DialogTitle>
          <DialogDescription className='text-2xl'>
            
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="johndoe@mail.com"
                      type="email"
                      autoComplete="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between items-center">
                    <FormLabel>Password</FormLabel>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-sm underline"
                      onClick={() => window.location.href = '/forgot-password'}
                    >
                      Forgot password?
                    </Button>
                  </div>
                  <FormControl>
                    <PasswordInput
                      placeholder="******"
                      autoComplete="current-password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full bg-[#25C05A] hover:bg-[#007B55] transition-colors text-white ">
              Login
            </Button>
            
            
            
            <div className="text-center text-sm">
              Don&apos;t have an account?{' '}
              <Button
                variant="link"
                className="p-0 h-auto underline"
                onClick={() => window.location.href = '/signup'}
              >
                Sign up
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}