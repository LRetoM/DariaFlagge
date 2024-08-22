/**
 * Button-Komponente.
 *
 * Diese Komponente rendert ein Standard-HTML-Button-Element und übergibt
 * alle zusätzlichen Eigenschaften (`...rest`) an das Button-Element. Der Button
 * kann auch beliebige Kinder-Elemente (`children`) enthalten, die innerhalb des Buttons gerendert werden.
 *
 * @component
 * @param {object} props - Die Eigenschaften, die an die Komponente übergeben werden.
 * @param {React.ReactNode} props.children - Der Inhalt, der innerhalb des Buttons angezeigt wird.
 * @param {object} [props.rest] - Weitere optionale Eigenschaften, die an das Button-Element weitergeleitet werden.
 * @example
 * // Beispiel wie man die Komponente verwendet
 * return <Button onClick={() => alert("Clicked!")}>Click Me</Button>;
 *
 * @returns {JSX.Element} Ein Button-Element mit den übergebenen Eigenschaften und Kindern.
 */
const Button = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>;
};

export default Button;
