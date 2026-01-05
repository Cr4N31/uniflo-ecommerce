import CartIcon from '../assets/cart-shopping-svgrepo-com.svg'
function Header({user}) {
    return (
        <header>
            <nav>
                <h1>Uniflow</h1>
                <div>
                    <input
                        placeholder="Search"
                        type="search"
                    />
                    <button
                        type="submit"
                    >Search
                    </button>
                </div>

                <div>
                    <button>
                        {!user ? "Login" : "My Account"}
                    </button>
                </div>

                <div>
                    <button>
                        <img 
                            style={{ width: 20 }} 
                            src={CartIcon} 
                            alt="cart" 
                        />
                    </button>
                </div>

            </nav>
        </header>
    )
}

export default Header