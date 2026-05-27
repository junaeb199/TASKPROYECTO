import Reloj from './Reloj'

function Header({ title, description, nombreUsuario }) {
  return (
    <header className="header">
      <div className="header-top">
        <h1 className="header-title">{title}</h1>
        <Reloj />
      </div>
      <p className="header-description">{description}</p>
      {nombreUsuario && (
        <p className="header-user">Bienvenido/a, {nombreUsuario}</p>
      )}
    </header>
  )
}

export default Header
