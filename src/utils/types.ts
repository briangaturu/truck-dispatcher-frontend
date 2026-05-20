// ─────────────────────────────────────────────────────────────
// AUTH
// ─────────────────────────────────────────────────────────────

export type UserRole =
  | "ADMIN"
  | "OWNER"
  | "DISPATCHER"
  | "FIELD_STAFF"
  | "DRIVER"
  | "SHIPPER";

export interface User {
  userId: number;

  firstname: string;
  lastname: string;

  email: string;

  contact?: string | null;

  address?: string | null;

  profileUrl?: string | null;

  role: UserRole;

  isVerified: boolean;

  createdAt: string;

  updatedAt: string;
}

export interface AuthState {
  user: User | null;

  token: string | null;

  refreshToken: string | null;

  isAuthenticated: boolean;

  loading: boolean;

  error: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  firstname: string;
  lastname: string;

  email: string;

  password: string;

  contact?: string;

  address?: string;

  role: "ADMIN" | "OWNER" | "DISPATCHER" | "FIELD_STAFF" | "DRIVER" | "SHIPPER";
}

export interface VerifyCodeData {
  email: string;
  code: string;
}

// ─────────────────────────────────────────────────────────────
// DRIVER
// ─────────────────────────────────────────────────────────────

export interface Driver {
  driverId: number;

  userId: number;

  licenseNumber: string;

  experienceYears?: number;

  isAvailable: boolean;

  currentLatitude?: number;

  currentLongitude?: number;

  createdAt: string;

  updatedAt: string;
}

// ─────────────────────────────────────────────────────────────
// TRUCK
// ─────────────────────────────────────────────────────────────

export type TruckStatus =
  | "AVAILABLE"
  | "ASSIGNED"
  | "IN_TRANSIT"
  | "MAINTENANCE";

export interface Truck {
  truckId: number;

  truckNumber: string;

  model?: string;

  capacity?: number;

  status: TruckStatus;

  assignedDriverId?: number;

  createdAt?: string;

  updatedAt?: string;
}

// ─────────────────────────────────────────────────────────────
// LOAD
// ─────────────────────────────────────────────────────────────

export type LoadStatus =
  | "PENDING"
  | "APPROVED"
  | "REJECTED"
  | "ASSIGNED"
  | "PICKED_UP"
  | "IN_TRANSIT"
  | "DELIVERED"
  | "CANCELLED";

export interface Load {
  loadId: number;

  shipperId: number;

  title: string;

  description?: string;

  pickupLocation: string;

  deliveryLocation: string;

  weight?: number;

  price?: number;

  pickupDate?: string;

  deliveryDate?: string;

  status: LoadStatus;

  createdAt: string;

  updatedAt: string;
}

// ─────────────────────────────────────────────────────────────
// DISPATCH
// ─────────────────────────────────────────────────────────────

export interface Dispatch {
  assignmentId: number;

  loadId: number;

  truckId: number;

  driverId: number;

  assignedBy: number;

  assignedAt: string;
}

// ─────────────────────────────────────────────────────────────
// TRACKING
// ─────────────────────────────────────────────────────────────

export interface TrackingEvent {
  trackingId: number;

  driverId: number;

  truckId: number;

  latitude: number;

  longitude: number;

  speed?: number;

  createdAt: string;
}

// ─────────────────────────────────────────────────────────────
// POD
// ─────────────────────────────────────────────────────────────

export interface POD {
  podId: number;

  loadId: number;

  uploadedBy?: number;

  imageUrl: string;

  receiverName?: string;

  signatureUrl?: string;

  uploadedAt: string;
}

// ─────────────────────────────────────────────────────────────
// PAYMENT
// ─────────────────────────────────────────────────────────────

export type PaymentStatus =
  | "PENDING"
  | "PAID"
  | "FAILED";

export interface Payment {
  paymentId: number;

  loadId: number;

  userId: number;

  amount: number;

  commission?: number;

  paymentStatus: PaymentStatus;

  transactionReference?: string;

  createdAt: string;

  updatedAt: string;
}

// ─────────────────────────────────────────────────────────────
// DASHBOARD STATS
// ─────────────────────────────────────────────────────────────

export interface DashboardStats {
  totalLoads: number;

  inTransit: number;

  delivered: number;

  pending: number;

  totalDrivers: number;

  totalTrucks: number;

  totalRevenue: number;

  paidAmount: number;

  pendingAmount: number;
}