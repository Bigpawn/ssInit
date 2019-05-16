import * as React from "react";

class {{ ComponentName }} extends React.Component<any, any> {
    public render() {
        return (
            <div>
                {% for k,v in attr %}
                    <li>{{ k }}:{{ v }}</li>
                {% else %}
                    error
                {% endfor %}    
            </div>
        )
    }
}

export { {{ ComponentName }} }