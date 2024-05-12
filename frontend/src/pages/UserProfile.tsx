import { useUpdateUser } from "@/api/UserApi";
import UserProfileForm from "@/forms/UserProfileForm/UserProfileForm";

export const UserProfile = () => {
  const { updateUser, isLoading } = useUpdateUser();
  return <UserProfileForm onSave={updateUser} isLoading={isLoading} />;
};
