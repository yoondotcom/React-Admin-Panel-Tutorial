import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <SearchOutlinedIcon/>
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className="icon"/>
                        English
                    </div>
                    <div className="item">
                        <DarkModeOutlinedIcon className="icon"/>
                    </div>
                    <div className="item">
                        <FullscreenExitOutlinedIcon className="icon"/>
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className="icon"/>
                        <div className="count">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className="icon"/>
                        <div className="count">2</div>
                    </div>
                    <div className="item">
                        <ListOutlinedIcon className="icon"/>
                    </div>
                    <div className="item">
                        <img
                            src="data:image/jpeg;base64,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"
                            alt=""
                            className="avatar"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar