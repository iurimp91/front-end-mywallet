import styled from "styled-components";

export default function CashFlowEntry(props) {
    const { date, description, value, type } = props.item;

    return(
        <EntryContainer type={type}>
            <div className="date-description-container">
                <span className="date">{date}</span>
                <div><span className="description">{description}</span></div>
            </div>
            <span className="value">{(value/100).toFixed(2).replace(".",",")}</span>
        </EntryContainer>
    );
}

const EntryContainer = styled.li`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    margin-bottom: 20px;

    .date-description-container {
        display: flex;
    }

    .date {
        color: #C6C6C6;
        margin-right: 5px;
        width: 45px;
    }

    .description {
        word-break: break-all;
    }

    .value {
        color: ${props => props.type === "expense" ? "#C70000" : "#50AD0E"};
        margin-left: 3px;
    }
`;