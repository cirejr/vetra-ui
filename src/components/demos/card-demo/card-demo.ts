import { Component } from '@angular/core';

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@lib/components/card/card';
import { Button } from '@lib/components/button/button';
import { Input } from '@lib/components/input/input';
import { Label } from '@lib/components/label/label';

@Component({
  selector: 'app-card-demo',
  imports: [
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    Button,
    Input,
    Label,
    Button,
  ],
  template: `
    <ui-card class="w-full max-w-sm">
      <ui-card-header>
        <ui-card-title>Login to your account</ui-card-title>
        <ui-card-description> Enter your email below to login to your account </ui-card-description>
        <ui-card-action>
          <a ui-button variant="link">Sign Up</a>
        </ui-card-action>
      </ui-card-header>
      <ui-card-content>
        <form>
          <div class="flex flex-col gap-6">
            <div class="grid gap-2">
              <label ui-label htmlFor="email">Email</label>
              <input ui-input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div class="grid gap-2">
              <div class="flex items-center">
                <label ui-label htmlFor="password">Password</label>
                <a href="#" class="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                  Forgot your password?
                </a>
              </div>
              <input ui-input id="password" type="password" required />
            </div>
          </div>
        </form>
      </ui-card-content>
      <ui-card-footer class="flex-col gap-2">
        <button ui-button type="submit" class="w-full">Login</button>
        <button ui-button variant="outline" class="w-full">Login with Google</button>
      </ui-card-footer>
    </ui-card>
  `,
  styleUrl: './card-demo.css',
})
export class CardDemo {}
