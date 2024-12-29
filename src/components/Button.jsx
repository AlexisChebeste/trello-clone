function Button ({children}) {
    return (
        <button className=" py-2 px-4 rounded-lg border border-spacing-3 border-gray-500 hover:bg-zinc-800 hover:text-white transition-colors">
            {children}
        </button>
    )
}

export default Button;