import Navbar from "@/components/Navbar";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative w-full min-h-[100dvh]">
            <Navbar />
            <div className="mt-0">
                {children}
            </div>
        </div>
    )
}