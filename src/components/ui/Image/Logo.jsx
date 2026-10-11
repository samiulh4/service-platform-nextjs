import Image from "next/image";
export default function Logo({ className="" } = {}) {
    return (
        <div className={`relative aspect-[3/1] ${className}`}>
            <Image
                src="/images/logo.png"
                alt="Service Platform Logo"
                fill
                className="object-contain"
                priority
            />
        </div>
    );
}
