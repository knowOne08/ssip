export const Greetings = ({name,message}: {name:string | null, message?: string | number }) => {
    return (
        <h1>Hello {name} {message}</h1>
    )
}

