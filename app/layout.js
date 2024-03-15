export const metadata = {
  title: "Guarducci Associates",
  description: "Desciption Here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
