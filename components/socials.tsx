import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Mail, Phone, MapPin } from "lucide-react";

const AdminProfile = ({
  name = "John Doe",
  role = "Administrator",
  avatarUrl = "/api/placeholder/30/30",
  email = "admin@example.com",
}) => {
  return (
    <div className="flex items-center h-[70px] border rounded-[30px] px-3 w-fit">
      <Avatar className="h-6 w-6 mr-2">
        <AvatarImage src={avatarUrl} alt={name} />
        <AvatarFallback className="text-xs">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>

      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-gray-500">{role}</span>
        <Mail className="h-4 w-4 text-gray-500" />
        <span className="text-xs text-gray-500">{email}</span>
      </div>
    </div>
  );
};

export default AdminProfile;
