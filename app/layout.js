import NavBar from "./components/navigation/navbar";
import "./globals.scss";

export const metadata = {
  title: "Guarducci Associates",
  description: "Desciption Here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
