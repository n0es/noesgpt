import Link from "next/link"

import { Icons } from "@/components/icons"
import { Button, buttonVariants } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export function Profile() {
/* The Profile component is placed at the top right of the navigation menu. If the user is not logged in, it shows a login button. If the user is logged in, it shows the user's avatar and a dropdown menu with a logout button. */
    const user = null
    if (!user) {
      return (
        <Dialog>
          <DialogTrigger>
            <Button className="w-48">Login</Button>
          </DialogTrigger>
          <DialogHeader>
            <DialogContent>
            <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Create an account</CardTitle>
        <CardDescription>
          Enter your email below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-6">
          <Button variant="outline">
            <Icons.gitHub className="mr-2 h-4 w-4" />
            Github
          </Button>
          <Button variant="outline">
            <Icons.gitHub className="mr-2 h-4 w-4" />
            Google
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Create account</Button>
      </CardFooter>
    </Card>
            </DialogContent>
          </DialogHeader>
        </Dialog>
      )
    }
    return (
      <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
        <AvatarFallback>
          <Icons.user className="h-6 w-6" />
        </AvatarFallback>
        <AvatarImage src={user.avatar} alt={user.name} />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="right">
        <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem href="/account">Account</DropdownMenuItem>
        <DropdownMenuItem href="/settings">Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem href="/logout">Logout</DropdownMenuItem>
      </DropdownMenuContent>
      </DropdownMenu>
    )
}