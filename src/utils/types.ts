// ─── Auth ───────────────────────────────────────────────────────────────────
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: "admin" | "driver" | "shipper";
  status: "active" | "inactive";
  createdAt: string;
  avatar?: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  phone?: string;
  role: "driver" | "shipper";
}

// ─── Driver ─────────────────────────────────────────────────────────────────
export interface Driver {
  id: string;
  name: string;
  phone: string;
  email: string;
  license: string;
  status: "active" | "inactive" | "on_trip";
  truckId?: string;
  createdAt: string;
  avatar?: string;
}

// ─── Truck ──────────────────────────────────────────────────────────────────
export interface Truck {
  id: string;
  plateNumber: string;
  model: string;
  capacity: number;
  status: "available" | "on_road" | "maintenance";
  driverId?: string;
  lastService?: string;
}

// ─── Load ───────────────────────────────────────────────────────────────────
export type LoadStatus =
  | "pending"
  | "dispatched"
  | "in_transit"
  | "delivered"
  | "cancelled";

export interface Load {
  id: string;
  origin: string;
  destination: string;
  driverId?: string;
  truckId?: string;
  shipperId: string;
  status: LoadStatus;
  cargo: string;
  weight: number;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  estimatedDelivery?: string;
}

// ─── Dispatch ────────────────────────────────────────────────────────────────
export interface Dispatch {
  id: string;
  loadId: string;
  driverId: string;
  truckId: string;
  dispatchedAt: string;
  notes?: string;
}

// ─── Tracking ────────────────────────────────────────────────────────────────
export interface TrackingEvent {
  id: string;
  loadId: string;
  status: string;
  location: string;
  timestamp: string;
  note?: string;
}

// ─── POD ─────────────────────────────────────────────────────────────────────
export interface POD {
  id: string;
  loadId: string;
  driverId: string;
  imageUrl: string;
  notes?: string;
  uploadedAt: string;
}

// ─── Payment ─────────────────────────────────────────────────────────────────
export type PaymentStatus = "paid" | "pending" | "overdue";

export interface Payment {
  id: string;
  invoiceId: string;
  loadId: string;
  customer: string;
  amount: number;
  status: PaymentStatus;
  dueDate: string;
  paidAt?: string;
}

// ─── Dashboard Stats ─────────────────────────────────────────────────────────
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
  overdueAmount: number;
}