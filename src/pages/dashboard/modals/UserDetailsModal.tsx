import { Link } from "react-router-dom";
import Modal from "../../../components/Modal";
import { useUserStore } from "../../../utils/userStore";
import {
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaBuilding,
  FaMapMarkerAlt,
} from "react-icons/fa";

interface UserDetailsModalProps {
  isUserDetailsOpen: boolean | null;
  onClose: () => void;
  title?: string;
}

const UserDetailsModal = ({
  isUserDetailsOpen,
  onClose,
}: UserDetailsModalProps) => {
  const { selectedUser } = useUserStore();

  if (!selectedUser) return null;

  const { name, username, email, phone, website, address, company } =
    selectedUser;

  return (
    <Modal isOpen={isUserDetailsOpen} onClose={onClose} title="User Details">
      <div className="space-y-6 text-sm text-gray-700">
        {/* Personal Info */}
        <section>
          <h3 className="text-lg font-semibold mb-2">Personal Info</h3>
          <p>
            <span className="font-medium">Name:</span> {name}
          </p>
          <p>
            <span className="font-medium">Username:</span> {username}
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-gray-500" /> {email}
          </p>
          <p className="flex items-center gap-2">
            <FaPhone className="text-gray-500" /> {phone}
          </p>
          <p className="flex items-center gap-2">
            <FaGlobe className="text-gray-500" />
            <Link
              to={`https://${website}`}
              className="text-blue-600 underline"
              target="_blank"
              rel="noreferrer"
            >
              https://{website}
            </Link>
          </p>
        </section>

        {/* Address */}
        <section>
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-gray-500" />
            {address.street}, {address.suite}, {address.city}, {address.zipcode}
          </p>
          <p>
            <span className="font-medium">Geo:</span> {address.geo.lat},&nbsp;
            {address.geo.lng}
          </p>
        </section>

        {/* Company Info */}
        <section>
          <h3 className="text-lg font-semibold mb-2">Company</h3>
          <p className="flex items-center gap-2">
            <FaBuilding className="text-gray-500" /> {company.name}
          </p>
          <p>
            <span className="font-medium">Catch Phrase:</span>{" "}
            {company.catchPhrase}
          </p>
          <p>
            <span className="font-medium">Business Strategy:</span> {company.bs}
          </p>
        </section>
      </div>
    </Modal>
  );
};

export default UserDetailsModal;
