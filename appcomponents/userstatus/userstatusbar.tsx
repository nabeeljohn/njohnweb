import UserStatus from "./userstatus";

export default function UserStatusBar() {
    return (
        <div className="relative z-10 text-right pt-1 pb-1 bg-gray-900 text-gray-100">
                <UserStatus />
        </div>
    );
}