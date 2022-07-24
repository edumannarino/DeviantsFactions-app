import React from 'react';

export default function NFT({ nft }) {

    const images = {
        1: "https://i.im.ge/2022/07/25/FDvmcL.jpg",
        5: "https://i.im.ge/2022/07/25/FDvjic.jpg",
        10: "https://i.im.ge/2022/07/25/FDv9lT.jpg",
        20: "https://i.im.ge/2022/07/25/FDv0K0.jpg",
        50: "https://i.im.ge/2022/07/25/FDviwW.jpg",
        100: "https://i.im.ge/2022/07/25/FDvwGG.jpg"
    }
    
    return (
        <>
            <li style={{listStyle: "none"}}>
                <div style={{display: "grid", gridTemplateColumns: "100%", justifyContent: "center", borderStyle: "solid",  borderWidth: "1px", margin: "10px"}}>
                    <div>
                        <img 
                            src={images[nft.value]} 
                            alt="Front"
                            height={105}
                            width={255}
                            />
                    </div>
                    <div>
                        ID: {nft.tokenID}
                    </div>
                    <div>
                        Value: {nft.value}
                    </div>
                    <br/>
                </div>
            </li>
        </>
    )
}