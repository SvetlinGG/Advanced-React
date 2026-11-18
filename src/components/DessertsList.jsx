export default function DessertsList({ data }) {
    return ( 
        <ul>
            {data
                .filter(item => item.calories < 500)
                .sort((a, b) => a.name.localeCompare(b.name))
                .map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
        </ul>
    )
    
}