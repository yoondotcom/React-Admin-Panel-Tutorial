export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { 
        field: "user", headerName:"User", width: 230, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar"/>
                    {params.row.username}
                </div>
            )
        }
    },
    {
        field: "email",
        headerName: "Email",
        width: 230
    },
    {
        field: "age",
        headerName: "Age",
        width: 100
    },
    {
        field: "status",
        headerName: "Status",
        width: 160,
        renderCell: (params) => {
            return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        }
    }
    
];

export const userRows = [
    {
        id: 1,
        username: "Snow",
        img: "https://p4.wallpaperbetter.com/wallpaper/142/656/60/katherine-langford-portrait-4k-wallpaper-preview.jpg",
        status: "active",
        email: "1snow@gmail.com",
        age: 35
    },
    {
        id: 2,
        username: "Jamie Lannister",
        img: "https://p4.wallpaperbetter.com/wallpaper/654/730/329/celebrity-women-portrait-display-lauren-cohan-wallpaper-preview.jpg",
        status: "passive",
        email: "jamie@gmail.com",
        age: 42
    },
    {
        id: 3,
        username: "Luffy",
        img: "https://w.namu.la/s/6ec0825609d8987849dfb6894cc122e41c304ca1516947442d8e64a660a533813814af95f791c9ca029383628a897b3823d2ef6a2ee886cec2604c84a7b1981d325c159a4bae393d3b3a1bae6cbc507e1bec1d0f08f5c83b8beba2b77e1bc6ff",
        status: "pending",
        email: "luffy@naver.com",
        age: 22
    },
    {
        id: 4,
        username: "Kim Jiyun",
        img: "https://file2.nocutnews.co.kr/newsroom/image/2021/12/27/202112270241005794_0.jpg",
        status: "active",
        email: "didany15@gmail.com",
        age: 28
    },
    {
        id: 5,
        username: "Roxie",
        img: "https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4b_438x447.jpg.img.jpg",
        status: "active",
        email: "33roxx@daum.net",
        age: 33
    },
    {
        id: 6,
        username: "Cristiano Ronaldo",
        img: "https://w.namu.la/s/9d828f6f4a0cd7d539f412f82c03b4ef85cadea643df2b3ce9f0bef914683e2d2abd77a65ad9f6c676bac543fdf4f0c538c85824f2579ac1405aa1959fa8f9c09d0b951332304a117dff609624cefc743611a94e093e5da14d16df13ca1d861d",
        status: "pending",
        email: "manutd@gmail.com",
        age: 37
    },
    {
        id: 7,
        username: "Kylian Mbappé",
        img: "https://images.chosun.com/resizer/Sb3J3eMYgcoJECITEPihiKdppzg=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/E6OFJ4T5VVLS6QFAVHLYGHE3QA.jpg",
        status: "active",
        email: "kylian@naver.com",
        age: 23
    },
    {
        id: 8,
        username: "David Beckham",
        img: "https://imgnn.seoul.co.kr/img//upload/2015/03/17/SSI_20150317175358_V.jpg",
        status: "active",
        email: "beackham@gmail.com",
        age: 46
    },
    {
        id: 9,
        username: "Ariana Grande",
        img: "http://www.insightkorea.co.kr/news/photo/201908/51220_44871_0830.jpg",
        status: "passive",
        email: "ariana@gmail.com",
        age: 28
    },
    {
        id: 10,
        username: "Yu Jaeseok",
        img: "https://images.chosun.com/resizer/aRkMdmnf2bEYLwNOTLe2ZvrHDnQ=/540x405/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/YIARR5OJCFAG5AGRYZYWOGTQKE.jpg",
        status: "pending",
        email: "jaeseok@daum.net",
        age: 49
    }
]