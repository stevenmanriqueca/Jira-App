import { FC } from 'react';
import { HomePage, AuthPage } from '../pages';

type JSXComponent = FC

interface RouteMain {
    path: string;
    Component: JSXComponent;
    to: string;
    name: string;
}

interface RouteAuth extends Omit<RouteMain, "to" | "name"> { };


export const mainRoutes: RouteMain[] =
    [
        {
            path: "/",
            Component: HomePage,
            to: "/",
            name: "Jira"
        },
    ]


export const authRoutes: RouteAuth[] =
    [
        {
            path: "/auth",
            Component: AuthPage,
        }
    ]