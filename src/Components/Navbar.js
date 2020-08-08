import React, { Component } from 'react';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import PieChartIcon from '@material-ui/icons/PieChart';
import WidgetsIcon from '@material-ui/icons/Widgets';
import ExtensionIcon from '@material-ui/icons/Extension';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="nav mb-5">
                    <div className="topNav text-light d-flex justify-content-around fixed-top mb-5">
                        <div></div>
                        <div>
                            <img src="https://cdn.worldvectorlogo.com/logos/invision.svg" className="logoImg" />
                        </div>
                        <Link to="/"><div className="text-white"><WidgetsIcon /><strong>Terasol</strong></div></Link>
                        <div className="text-white-50"><BookmarkIcon />Bookmarks</div>
                        {/* <Link to="/Search"><div className="text-white"><PieChartIcon />SEARCH HOUSE</div></Link>
                        <Link to="/GiveRent"><div className="text-white"><ExtensionIcon />RENT HOUSE</div></Link> */}
                        <div></div>
                        <div></div>
                        
                        <div>
                            <span>
                                {/* <SearchIcon /> */}
                            </span>
                            <span>
                                <img src="https://avatars1.githubusercontent.com/u/53759010?s=460&v=4" className="leaImg mx-3" />
                            </span>
                            <span className="h5 mt-4 text-white-50">Saket Paras</span>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar