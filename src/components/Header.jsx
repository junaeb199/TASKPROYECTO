function Header({ title, description, nombreUsuario }) {
  return (
    <header className="header">
      <h1 className="header-title">{title}</h1>
      <p className="header-description">{description}</p>
      {nombreUsuario && (
        <p className="header-user">Bienvenido/a, {nombreUsuario}</p>
      )}
    </header>
  )
}

export default Header
