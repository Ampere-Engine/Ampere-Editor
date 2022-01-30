/*


In order to maintain a consistent architecture and clean code,
I decided to create my own convention, inspired by Vue and 
Angular, which I called CSR. It involves breaking down each
component into several layers including:
    - styled-[C]omponents (App.c.ts)
    - [S]ervices (App.s.ts)
    - [R]ender (App.tsx)
    - [T]ypes (App.t.ts)
and maybe more in future.

Common files such as router.ts, or index.ts are are lowercase,
but "unique" files such as Navbar.tsx or Footer.tsx are
capitalized. 

Ampere Engine 2022


*/
