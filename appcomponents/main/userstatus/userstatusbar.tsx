import UserStatus from "../userstatus/userstatus";

export default function UserStatusBar() {
    return (
        <div className="text-right pt-1 pb-1 bg-gray-900 text-gray-100">
                <UserStatus />
        </div>
    );
}