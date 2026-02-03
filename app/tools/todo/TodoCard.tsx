import classes from "./TodoCard.module.css";

export default function TodoCard({cardTitle, cardBody, cardCreatedOn}: { cardTitle: string, cardBody: string, cardCreatedOn: string}) {
    return (
        <>
            <div className="w-full my-4 p-6 bg-gray-100 rounded-lg shadow-md text-black">
                <p className={classes.title}>{cardTitle}</p>
                <p>{cardBody}</p>

                <hr className={classes.divider} />
                <p className={classes.dateTime}>
                    Created on: {new Date(cardCreatedOn).toLocaleString()}
                </p>
            </div>
        </>
    );
}
