import { FC } from 'react';
import { HomePage, AuthPage, NotesPage } from '../pages';

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
        {
            path: "/notes",
            Component: NotesPage,
            to: "/notes",
            name: "Notes"
        }
    ]


export const authRoutes: RouteAuth[] =
    [
        {
            path: "/auth",
            Component: AuthPage,
        }
    ]