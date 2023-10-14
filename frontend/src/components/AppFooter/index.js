import { Typography } from "antd";

function AppFooter() {
  return (
    <div className="AppFooter">
      <Typography.Link href="tel:+123456789">+91-8355921551</Typography.Link>
      <Typography.Link href="https://blackcoffer.com/LegalDoc/bnews-privacy-policy" target={"_blank"}>
        Privacy Policy
      </Typography.Link>
      <Typography.Link href="https://blackcoffer.com/LegalDoc/bnews-privacy-policy" target={"_blank"}>
        Terms of Use
      </Typography.Link>
    </div>
  );
}
export default AppFooter;