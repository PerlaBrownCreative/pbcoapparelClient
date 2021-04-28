import React from 'react'
import "./Navbarstyle.css";


export interface TopPromoProps {
    
}
 
export interface TopPromoState {
    
}
 
class TopPromo extends React.Component<TopPromoProps, TopPromoState> {
    constructor(props: TopPromoProps) {
        super(props);
        this.state = {
            
        };
    }
    render() { 
        return (
                <div className="topMessage">
              FREE SHIPPING FOR US ORDERS OVER $99!
            </div>
                
          );
    }
}
 
export default TopPromo;