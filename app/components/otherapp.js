import './otherapp.css';
import React from 'react';
import fetchJsonp from 'fetch-jsonp';

export default class Otherapp extends React.Component{
    constructor(props){
        super(props);
        this.state={apps:[]}
    }
    componentWillUnmount(){
        this.isMounted = false;
    }
    componentDidMount(){
        this.isMounted = true;
        fetchJsonp(this.props.source).then((response)=>{
            return response.json();
        }).then((json)=>{
            console.log(json);
            if(json.status){
                if(this.isMounted){
                    this.setState({
                        apps:json.data,
                    })
                }
            }else {
                alert(json.msg);
            }
        })
    }
    render(){
        let countId = 0;
        return (
            <div className="oapp">
                <ul>
                    {
                        this.state.apps.map((app)=>{
                            return <li key={'otherapp'+countId++}>
                                <a href={app.url}>
                                    <div className="app_icon">
                                        <img src={app.icon}/>
                                    </div>
                                    <span>{app.title}</span>
                                </a>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}