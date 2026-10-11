import Image from "next/image";
export default function Logo({ className="" } = {}) {
    return (
        <div className={`relative aspect-[3/1] ${className}`}>
            <Image
                src="/images/logo.png"
                alt="Service Platform Logo"
                fill
                sizes="(max-width: 768px) 150px, 300px"
                className="object-contain"
                priority
            />
        </div>
    );
}
