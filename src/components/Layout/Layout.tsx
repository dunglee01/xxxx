import { ReactNode } from "react";

export default function MyLayout({ children }: { children: ReactNode }) {
    return (
        <div className="container md:mx-auto ">{children}</div>
    );
}
