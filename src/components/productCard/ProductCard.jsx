
import './productCard.css';
function ProductCard() {
    const productData = {
        image: 'https://images.cgames.de/images/gamestar/290/t%C3%BCftler-baut-verr%C3%BCcktes-fahrrad-das-eigentlich-komplett-undenkbar-ist-banner_6251904.jpg',
        title: 'Das Fahrrad mit einem Rad und zwei halben Rädern',
        desc: "Vorderseitig ist dieses Fahrrad ganz gewöhnlich: Rad, Lenker und Gabel. Verrücktes spielt sich auf der Rückseite des Gefährts ab. Dort nämlich sind zwei halbe Räder verbaut. Grundlage für diese Konstruktion ist eine simple, mathematische Gleichung: 0,5 + 0,5 = 1. Wenn »ein Rad« gleich »ein Rad« ist, dann müssen zwei halbe Räder wie ein Ganzes funktionieren, oder?",
        isAvailable: false
    };
    
    return (
        <div className = {productData.isAvailable ? "product-card" : "product-card disable"}>
            <h4>{productData.title}</h4>
            <img src={productData.image} alt="" />
            <p>{productData.desc}</p>
           
        </div>
    );
}

export default ProductCard;
