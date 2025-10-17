import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export function TrackPage() {
  const { orderId } = useParams();
  const [tracking, setTracking] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTracking = async () => {
      try {
        // Replace this API endpoint with your backend endpoint
        const res = await axios.get(`/api/orders/${orderId}/tracking`);
        setTracking(res.data);
      } catch (err) {
        console.error("Error fetching tracking info:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTracking();
  }, [orderId]);

  if (loading) return <div className="p-8 text-center">Loading tracking info...</div>;
  if (!tracking) return <div className="p-8 text-center">No tracking info found for order #{orderId}</div>;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="bg-white p-8 shadow-md rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4 text-center">Tracking Order #{orderId}</h1>
        <p><strong>Status:</strong> {tracking.status}</p>
        <p><strong>Location:</strong> {tracking.location}</p>
        <p><strong>Estimated Delivery:</strong> {tracking.estimatedDelivery}</p>
      </div>
    </div>
  );
}
