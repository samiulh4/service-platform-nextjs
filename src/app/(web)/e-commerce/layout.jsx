
import NavEcommerce from "@/components/ui/Header/NavEcommerce";
import FooterEcommerce from "@/components/ui/Footer/FooterEcommerce";  

export default function EcommerceLayout({ children }) {
    return (
        <>
            <NavEcommerce />
            {children}
            <FooterEcommerce/>
        </>
    )
}