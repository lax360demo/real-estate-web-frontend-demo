import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

/* =========================================
   INITIAL SEED DATA (IF NONE IN STORAGE)
========================================= */
const INITIAL_MOCK_REQUESTS = [
  {
    id: "DPDP-VIEW-2026-9214",
    trackingId: "DPDP-VIEW-2026-9214",
    actionId: "view",
    actionTitle: "View My Data",
    name: "Karthik Subramanian",
    phone: "+91 98401 23456",
    email: "karthik.subramanian@example.com",
    details: "Requesting full summary of all property consultation interactions and site visit logs recorded under my mobile number.",
    fieldToCorrect: "",
    withdrawalType: "",
    grievanceType: "",
    status: "Pending",
    isDataPurged: false,
    dpoNotes: "Identity verified via OTP. Compilation of CRM property enquiry history in progress.",
    resolutionDate: null,
    createdAt: "2026-09-02T10:30:00Z",
    formattedDate: "Sep 2, 2026",
    slaHoursLeft: 46,
  },
  {
    id: "DPDP-CORRECT-2026-8431",
    trackingId: "DPDP-CORRECT-2026-8431",
    actionId: "correct",
    actionTitle: "Correct My Data",
    name: "Priya Vengatesh",
    phone: "+91 97890 87654",
    email: "priya.v@example.com",
    details: "Update my registered phone number and change my preferred property budget range from ₹40L to ₹80L.",
    fieldToCorrect: "Phone number updated to +91 97890 99999; Budget range adjusted.",
    withdrawalType: "",
    grievanceType: "",
    status: "In Progress",
    isDataPurged: false,
    dpoNotes: "Updated in primary advisory ledger; CRM sync scheduled.",
    resolutionDate: null,
    createdAt: "2026-09-01T14:15:00Z",
    formattedDate: "Sep 1, 2026",
    slaHoursLeft: 22,
  },
  {
    id: "DPDP-WITHDRAW-2026-7819",
    trackingId: "DPDP-WITHDRAW-2026-7819",
    actionId: "withdraw",
    actionTitle: "Withdraw Consent",
    name: "Rajeshwaran Nair",
    phone: "+91 94440 11223",
    email: "rajesh.nair@example.com",
    details: "Please unsubscribe me from weekend project launch announcements on WhatsApp.",
    fieldToCorrect: "",
    withdrawalType: "Only Promotional WhatsApp Messages",
    grievanceType: "",
    status: "Resolved",
    isDataPurged: false,
    dpoNotes: "WhatsApp marketing webhook opted out. Confirmed via SMS dispatch.",
    resolutionDate: "Sep 1, 2026",
    createdAt: "2026-08-31T09:00:00Z",
    formattedDate: "Aug 31, 2026",
    slaHoursLeft: 0,
  },
  {
    id: "DPDP-ERASE-2026-6102",
    trackingId: "DPDP-ERASE-2026-6102",
    actionId: "erase",
    actionTitle: "Request Erasure",
    name: "Devika Ramesh",
    phone: "+91 98841 55667",
    email: "devika.r@example.com",
    details: "Purchased property elsewhere. Kindly delete all my registered data and site visit records.",
    fieldToCorrect: "",
    withdrawalType: "",
    grievanceType: "",
    status: "Pending",
    isDataPurged: false,
    dpoNotes: "Awaiting DPO permanent data purge authorization.",
    resolutionDate: null,
    createdAt: "2026-08-29T11:45:00Z",
    formattedDate: "Aug 29, 2026",
    slaHoursLeft: 18,
  },
  {
    id: "DPDP-GRIEVANCE-2026-5390",
    trackingId: "DPDP-GRIEVANCE-2026-5390",
    actionId: "grievance",
    actionTitle: "Privacy Grievance",
    name: "M. Soundararajan",
    phone: "+91 98422 99887",
    email: "soundar.m@example.com",
    details: "Received follow-up call after opting out on website.",
    fieldToCorrect: "",
    withdrawalType: "",
    grievanceType: "Unwanted Marketing Calls / Messages",
    status: "Resolved",
    isDataPurged: false,
    dpoNotes: "Advisory desk rep reprimanded. Number placed on internal National Do-Not-Call override registry.",
    resolutionDate: "Aug 28, 2026",
    createdAt: "2026-08-28T16:20:00Z",
    formattedDate: "Aug 28, 2026",
    slaHoursLeft: 0,
  },
];

const INITIAL_AUDIT_LOGS = [
  { id: "AUD-891", type: "Cookie Preference Saved", userHash: "IP_2405:201:***:89a1", timestamp: "Today, 12:45 PM", status: "Analytics: ON, Marketing: ON" },
  { id: "AUD-890", type: "Enquiry Form Consent", userHash: "TEL_+91 98401*****", timestamp: "Today, 11:20 AM", status: "Explicit Consent (DPDP Sec 6)" },
  { id: "AUD-889", type: "Site Visit Cab Consent", userHash: "TEL_+91 97890*****", timestamp: "Yesterday, 04:15 PM", status: "Chauffeur Coordination Granted" },
  { id: "AUD-888", type: "Cookie Preference Saved", userHash: "IP_117.211.***:302", timestamp: "Yesterday, 02:10 PM", status: "Essential Only (Declined Marketing)" },
  { id: "AUD-887", type: "Data Principal Request Filed", userHash: "DPDP-CORRECT-2026-8431", timestamp: "Sep 1, 2026", status: "Recorded Under DPO Queue" },
];

function AdminPanel() {
  const [activeTab, setActiveTab] = useState("requests"); // 'dashboard' | 'requests' | 'audits' | 'guidelines'
  
  const [requests, setRequests] = useState(() => {
    try {
      const stored = localStorage.getItem("lax360_dpdp_requests");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
      localStorage.setItem("lax360_dpdp_requests", JSON.stringify(INITIAL_MOCK_REQUESTS));
      return INITIAL_MOCK_REQUESTS;
    } catch {
      return INITIAL_MOCK_REQUESTS;
    }
  });

  const [auditLogs, setAuditLogs] = useState(() => {
    try {
      const stored = localStorage.getItem("lax360_dpdp_audits");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
      localStorage.setItem("lax360_dpdp_audits", JSON.stringify(INITIAL_AUDIT_LOGS));
      return INITIAL_AUDIT_LOGS;
    } catch {
      return INITIAL_AUDIT_LOGS;
    }
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const [selectedRequest, setSelectedRequest] = useState(null);
  const [actionStatus, setActionStatus] = useState("Pending");
  const [dpoNotes, setDpoNotes] = useState("");
  const [erasureConfirmModal, setErasureConfirmModal] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3800);
  };

  // KPI Calculations
  const stats = useMemo(() => {
    const total = requests.length;
    const pending = requests.filter((r) => r.status === "Pending").length;
    const inProgress = requests.filter((r) => r.status === "In Progress").length;
    const resolved = requests.filter((r) => r.status === "Resolved").length;
    const erasurePending = requests.filter((r) => r.actionId === "erase" && r.status !== "Resolved").length;
    const complianceRate = total > 0 ? Math.round((resolved / total) * 100) : 100;
    return { total, pending, inProgress, resolved, erasurePending, complianceRate };
  }, [requests]);

  // Filtered requests
  const filteredRequests = useMemo(() => {
    return requests.filter((req) => {
      // Search match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        req.trackingId.toLowerCase().includes(query) ||
        req.name.toLowerCase().includes(query) ||
        req.phone.toLowerCase().includes(query) ||
        req.email.toLowerCase().includes(query);

      // Type filter
      const matchesType = typeFilter === "all" || req.actionId === typeFilter;

      // Status filter
      const matchesStatus = statusFilter === "all" || req.status === statusFilter;

      return matchesSearch && matchesType && matchesStatus;
    });
  }, [requests, searchQuery, typeFilter, statusFilter]);

  // Handle open request details modal
  const handleOpenDetails = (req) => {
    setSelectedRequest(req);
    setActionStatus(req.status);
    setDpoNotes(req.dpoNotes || "");
  };

  // Handle Save Status / DPO Notes
  const handleSaveStatus = (e) => {
    e.preventDefault();
    if (!selectedRequest) return;

    const updated = requests.map((item) => {
      if (item.id === selectedRequest.id) {
        return {
          ...item,
          status: actionStatus,
          dpoNotes: dpoNotes,
          resolutionDate: actionStatus === "Resolved" ? new Date().toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" }) : item.resolutionDate,
        };
      }
      return item;
    });

    setRequests(updated);
    try {
      localStorage.setItem("lax360_dpdp_requests", JSON.stringify(updated));
    } catch {
      // fallback
    }

    showToast(`Request ${selectedRequest.trackingId} updated to "${actionStatus}"!`);
    setSelectedRequest(null);
  };

  // Handle Permanent Data Erasure
  const handleConfirmPermanentErasure = (req) => {
    if (!req) return;

    const formattedNow = new Date().toLocaleDateString("en-IN", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    const timeNow = new Date().toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });

    // 1. Purge the personal data in requests list
    const updated = requests.map((item) => {
      if (item.id === req.id) {
        return {
          ...item,
          name: `${item.name.replace(" (DATA PURGED)", "")} (DATA PURGED)`,
          phone: "+91 ***** [PURGED]",
          email: "[PURGED@dpdp-erased.local]",
          details: "[PERSONAL IDENTIFIABLE INFORMATION PERMANENTLY ERASED FROM ALL ACTIVE MARKETING AND CRM DATABASES AS PER DPDP ACT 2023]",
          status: "Resolved",
          isDataPurged: true,
          dpoNotes: `User personal data permanently purged on ${formattedNow} at ${timeNow} by DPO. Statutory audit certificate DPDP-PURGE-${req.trackingId} recorded.`,
          resolutionDate: formattedNow,
          slaHoursLeft: 0,
        };
      }
      return item;
    });

    setRequests(updated);
    try {
      localStorage.setItem("lax360_dpdp_requests", JSON.stringify(updated));
    } catch {
      // fallback
    }

    // 2. Append permanent erasure audit entry
    const newAuditEntry = {
      id: `AUD-${Math.floor(100 + Math.random() * 900)}`,
      type: "Permanent Data Erasure (Right to Forget)",
      userHash: `PURGED_${req.trackingId}`,
      timestamp: `Today, ${timeNow}`,
      status: "Personal Records & Contact Data Permanently Purged",
    };

    const updatedAudits = [newAuditEntry, ...auditLogs];
    setAuditLogs(updatedAudits);
    try {
      localStorage.setItem("lax360_dpdp_audits", JSON.stringify(updatedAudits));
    } catch {
      // fallback
    }

    showToast(`User data for ${req.name} (${req.trackingId}) has been permanently deleted!`);
    setErasureConfirmModal(null);
    setSelectedRequest(null);
  };

  // Export CSV Report
  const handleExportCSV = () => {
    const headers = "Tracking ID,Request Type,Data Principal,Phone,Email,Status,Is Purged,Date Filed,DPO Notes\n";
    const rows = requests
      .map(
        (r) =>
          `"${r.trackingId}","${r.actionTitle}","${r.name}","${r.phone}","${r.email}","${r.status}","${r.isDataPurged ? "YES" : "NO"}","${r.formattedDate}","${(r.dpoNotes || "").replace(/"/g, '""')}"`
      )
      .join("\n");

    const blob = new Blob([headers + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `LAX360_DPDP_Audit_Report_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast("DPDP Audit Report exported successfully!");
  };

  return (
    <div className="admin-page-wrapper">
      {/* TOAST NOTIFICATION */}
      {toastMessage && <div className="admin-toast-alert">{toastMessage}</div>}

      {/* ADMIN HEADER BAR */}
      <header className="admin-top-nav">
        <div className="admin-top-container">
          <div className="admin-brand-group">
            <Link to="/" className="admin-logo-link">
              <img src="/logo/logo.png" alt="LAX360" className="admin-logo-img" />
              <div>
                <strong>LAX360 ADMIN</strong>
                <small>DPDP GOVERNANCE DESK</small>
              </div>
            </Link>
          </div>

          <div className="admin-nav-actions">
            <Link to="/privacy-centre" className="admin-link-btn" target="_blank">
              <span>View Privacy Centre ↗</span>
            </Link>
            <Link to="/" className="admin-link-btn" target="_blank">
              <span>Public Website ↗</span>
            </Link>
          </div>
        </div>
      </header>

      {/* ADMIN MAIN BODY */}
      <main className="admin-main-content">
        <div className="admin-content-container">
          
          {/* HEADER TITLE & STATS STRIP */}
          <div className="admin-page-header">
            <div>
              <h1>Privacy &amp; Data Protection Control Center</h1>
              <p>Monitor, process, and audit personal data requests in strict compliance with the Digital Personal Data Protection (DPDP) Act, 2023.</p>
            </div>
            <button type="button" className="admin-export-btn" onClick={handleExportCSV}>
              <span>📥 Export DPDP Audit Log (CSV)</span>
            </button>
          </div>

          {/* KPI STAT CARDS */}
          <div className="admin-kpi-grid">
            <div className="admin-kpi-card">
              <div className="kpi-icon-wrap icon-purple">📥</div>
              <div className="kpi-data">
                <span className="kpi-label">Total DPDP Requests</span>
                <strong className="kpi-value">{stats.total}</strong>
                <span className="kpi-subtext">Across all corridors</span>
              </div>
            </div>

            <div className="admin-kpi-card">
              <div className="kpi-icon-wrap icon-orange">⏳</div>
              <div className="kpi-data">
                <span className="kpi-label">Pending Review</span>
                <strong className="kpi-value">{stats.pending}</strong>
                <span className="kpi-subtext">Requires DPO attention</span>
              </div>
            </div>

            <div className="admin-kpi-card">
              <div className="kpi-icon-wrap icon-blue">🗑️</div>
              <div className="kpi-data">
                <span className="kpi-label">Erasure Requests</span>
                <strong className="kpi-value">{stats.erasurePending}</strong>
                <span className="kpi-subtext">Pending permanent purge</span>
              </div>
            </div>

            <div className="admin-kpi-card">
              <div className="kpi-icon-wrap icon-green">✅</div>
              <div className="kpi-data">
                <span className="kpi-label">Resolved &amp; Closed</span>
                <strong className="kpi-value">{stats.resolved}</strong>
                <span className="kpi-subtext">
                  <strong>{stats.complianceRate}%</strong> Compliance Rate
                </span>
              </div>
            </div>
          </div>

          {/* TABS BAR */}
          <div className="admin-tabs-bar">
            <button
              type="button"
              className={`admin-tab-btn ${activeTab === "requests" ? "active" : ""}`}
              onClick={() => setActiveTab("requests")}
            >
              📋 Data Principal Requests ({requests.length})
            </button>
            <button
              type="button"
              className={`admin-tab-btn ${activeTab === "audits" ? "active" : ""}`}
              onClick={() => setActiveTab("audits")}
            >
              🛡️ Consent &amp; Cookie Audit Logs ({auditLogs.length})
            </button>
            <button
              type="button"
              className={`admin-tab-btn ${activeTab === "guidelines" ? "active" : ""}`}
              onClick={() => setActiveTab("guidelines")}
            >
              ⚖️ DPDP Statutory Rules &amp; SLA Guidelines
            </button>
          </div>

          {/* TAB 1: REQUESTS MANAGER */}
          {activeTab === "requests" && (
            <div className="admin-tab-panel">
              {/* FILTER & SEARCH BAR */}
              <div className="admin-filter-bar">
                <div className="admin-search-wrap">
                  <span className="search-icon">🔍</span>
                  <input
                    type="text"
                    placeholder="Search by Tracking ID, Name, Phone, or Email..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <button type="button" className="clear-search-btn" onClick={() => setSearchQuery("")}>
                      ✕
                    </button>
                  )}
                </div>

                <div className="admin-dropdown-filters">
                  <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
                    <option value="all">All Request Types</option>
                    <option value="view">View My Data</option>
                    <option value="correct">Correct My Data</option>
                    <option value="erase">Request Erasure</option>
                    <option value="withdraw">Withdraw Consent</option>
                    <option value="grievance">Privacy Grievance</option>
                  </select>

                  <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                    <option value="all">All Statuses</option>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Resolved">Resolved</option>
                  </select>
                </div>
              </div>

              {/* REQUESTS TABLE */}
              <div className="admin-table-container">
                <table className="admin-data-table">
                  <thead>
                    <tr>
                      <th>Tracking ID</th>
                      <th>Data Principal</th>
                      <th>Request Type</th>
                      <th>Date Filed</th>
                      <th>SLA Target</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredRequests.length > 0 ? (
                      filteredRequests.map((req) => (
                        <tr key={req.id}>
                          <td>
                            <strong className="tracking-code">{req.trackingId}</strong>
                          </td>
                          <td>
                            <div className="principal-cell">
                              <strong>
                                {req.name}
                                {req.isDataPurged && <span className="purged-badge">PURGED</span>}
                              </strong>
                              <span>{req.phone}</span>
                              <small>{req.email}</small>
                            </div>
                          </td>
                          <td>
                            <span className={`req-type-pill type-${req.actionId}`}>
                              {req.actionTitle}
                            </span>
                          </td>
                          <td>
                            <span className="date-text">{req.formattedDate}</span>
                          </td>
                          <td>
                            <span className={`sla-pill ${req.status === "Resolved" ? "sla-done" : "sla-active"}`}>
                              {req.status === "Resolved" ? "Fulfilled" : `${req.slaHoursLeft || 48}h remaining`}
                            </span>
                          </td>
                          <td>
                            <span className={`status-badge status-${req.status.toLowerCase().replace(" ", "-")}`}>
                              {req.status}
                            </span>
                          </td>
                          <td>
                            <div className="table-actions-group">
                              <button
                                type="button"
                                className="table-action-btn"
                                onClick={() => handleOpenDetails(req)}
                              >
                                Review ➔
                              </button>
                              {req.actionId === "erase" && !req.isDataPurged && (
                                <button
                                  type="button"
                                  className="table-purge-btn"
                                  onClick={() => setErasureConfirmModal(req)}
                                  title="Permanently Delete User Data"
                                >
                                  🗑️ Delete Data
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7" className="empty-table-cell">
                          No DPDP requests match the selected filters.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: AUDIT LOGS */}
          {activeTab === "audits" && (
            <div className="admin-tab-panel">
              <div className="audit-info-banner">
                <div>
                  <h4>Immutable DPDP Consent &amp; Erasure Audit Trail</h4>
                  <p>Records of timestamped user consents and permanent data erasure certificates in accordance with Section 6(7) &amp; Section 12 of the DPDP Act 2023.</p>
                </div>
                <span className="audit-secure-badge">🔒 Tamper-Proof Log</span>
              </div>

              <div className="admin-table-container">
                <table className="admin-data-table">
                  <thead>
                    <tr>
                      <th>Audit Event ID</th>
                      <th>Event Type</th>
                      <th>Anonymized Identifier / User</th>
                      <th>Timestamp</th>
                      <th>Consent Scope / Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {auditLogs.map((log) => (
                      <tr key={log.id}>
                        <td><strong>{log.id}</strong></td>
                        <td>{log.type}</td>
                        <td><code>{log.userHash}</code></td>
                        <td>{log.timestamp}</td>
                        <td><span className="audit-status-pill">{log.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: STATUTORY GUIDELINES */}
          {activeTab === "guidelines" && (
            <div className="admin-tab-panel">
              <div className="guidelines-card-grid">
                <div className="admin-guide-card">
                  <h4>⏱️ 72-Hour Resolution Mandate</h4>
                  <p>All Data Principal requests (Access, Correction, Erasure) must be acknowledged within 24 hours and addressed within 72 hours under DPDP rules.</p>
                </div>
                <div className="admin-guide-card">
                  <h4>🗑️ Erasure vs. Statutory Retention</h4>
                  <p>When an Erasure request is processed, marketing and personal contact data is completely purged. Transactional records mandated by RERA are archived in cold storage.</p>
                </div>
                <div className="admin-guide-card">
                  <h4>↩️ Ease of Consent Withdrawal</h4>
                  <p>Consent withdrawal must be as easy as granting consent. Submitting a withdrawal request automatically halts WhatsApp notifications.</p>
                </div>
                <div className="admin-guide-card">
                  <h4>⚖️ Grievance Escalation Redressal</h4>
                  <p>Unresolved grievances may be escalated by Data Principals to the Data Protection Board of India (DPBI) if not solved within 30 days.</p>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* DETAIL & ACTION MODAL */}
      {selectedRequest && (
        <div className="dpdp-modal-backdrop" onClick={() => setSelectedRequest(null)}>
          <div className="dpdp-modal-container admin-action-modal" onClick={(e) => e.stopPropagation()}>
            <div className="dpdp-modal-header">
              <div className="dpdp-modal-title-wrap">
                <span className="dpdp-badge">DPO ACTION DESK</span>
                <h3>Review Request: {selectedRequest.trackingId}</h3>
                <p>Data Principal: <strong>{selectedRequest.name}</strong> ({selectedRequest.phone})</p>
              </div>
              <button
                type="button"
                className="dpdp-modal-close-btn"
                onClick={() => setSelectedRequest(null)}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveStatus} className="dpdp-modal-body admin-modal-form">
              {/* DETAILS SUMMARY */}
              <div className="admin-req-detail-box">
                <div className="req-detail-row">
                  <span>Request Type:</span>
                  <strong>{selectedRequest.actionTitle}</strong>
                </div>
                <div className="req-detail-row">
                  <span>Registered Email:</span>
                  <span>{selectedRequest.email}</span>
                </div>
                <div className="req-detail-row">
                  <span>Date Registered:</span>
                  <span>{selectedRequest.formattedDate}</span>
                </div>
                {selectedRequest.fieldToCorrect && (
                  <div className="req-detail-row highlight-row">
                    <span>Requested Correction:</span>
                    <strong>{selectedRequest.fieldToCorrect}</strong>
                  </div>
                )}
                {selectedRequest.withdrawalType && (
                  <div className="req-detail-row highlight-row">
                    <span>Withdrawal Scope:</span>
                    <strong>{selectedRequest.withdrawalType}</strong>
                  </div>
                )}
                {selectedRequest.grievanceType && (
                  <div className="req-detail-row highlight-row">
                    <span>Grievance Nature:</span>
                    <strong>{selectedRequest.grievanceType}</strong>
                  </div>
                )}
                <div className="req-detail-row">
                  <span>User Remarks / Payload:</span>
                  <p className="remarks-text">{selectedRequest.details}</p>
                </div>
              </div>

              {/* SPECIAL ERASURE ACTION BLOCK */}
              {selectedRequest.actionId === "erase" && !selectedRequest.isDataPurged && (
                <div className="admin-erasure-action-box">
                  <div className="erasure-box-header">
                    <span className="erasure-warning-icon">⚠️</span>
                    <div>
                      <strong>Data Erasure Action (Right to Forget)</strong>
                      <p>User has formally requested complete deletion of their personal records and consultation history under DPDP Section 12.</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="admin-erase-purge-btn"
                    onClick={() => setErasureConfirmModal(selectedRequest)}
                  >
                    <span>🗑️ Permanently Delete &amp; Purge User Data</span>
                  </button>
                </div>
              )}

              {selectedRequest.isDataPurged && (
                <div className="admin-erasure-purged-notice">
                  <span>✅ Personal records associated with this request have been permanently purged from active systems.</span>
                </div>
              )}

              {/* ACTION: UPDATE STATUS */}
              <div className="form-field-group">
                <label htmlFor="actionStatus">Update Processing Status</label>
                <select
                  id="actionStatus"
                  value={actionStatus}
                  onChange={(e) => setActionStatus(e.target.value)}
                >
                  <option value="Pending">Pending (Awaiting Verification)</option>
                  <option value="In Progress">In Progress (Action Underway)</option>
                  <option value="Resolved">Resolved &amp; Fulfill Request</option>
                  <option value="Rejected">Rejected (Non-compliant / Unverifiable)</option>
                </select>
              </div>

              {/* ACTION: DPO REMARKS */}
              <div className="form-field-group">
                <label htmlFor="dpoNotes">DPO Resolution Remarks &amp; Audit Notes</label>
                <textarea
                  id="dpoNotes"
                  rows="3"
                  placeholder="Enter resolution details, CRM action taken, or response note sent to Data Principal..."
                  value={dpoNotes}
                  onChange={(e) => setDpoNotes(e.target.value)}
                ></textarea>
              </div>

              <div className="admin-modal-footer-btns">
                <button
                  type="button"
                  className="dpdp-btn dpdp-btn-secondary"
                  onClick={() => setSelectedRequest(null)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="dpdp-btn dpdp-btn-primary"
                >
                  Save &amp; Update Request ➔
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CONFIRMATION MODAL FOR PERMANENT ERASURE */}
      {erasureConfirmModal && (
        <div className="dpdp-modal-backdrop" onClick={() => setErasureConfirmModal(null)}>
          <div className="dpdp-modal-container admin-confirm-modal" onClick={(e) => e.stopPropagation()}>
            <div className="confirm-modal-icon-wrap">
              🗑️
            </div>
            <h3>Confirm Permanent Data Erasure</h3>
            <p>
              Are you sure you want to permanently erase all personal identifiable records for this Data Principal? This action is irreversible under the <strong>Digital Personal Data Protection (DPDP) Act, 2023</strong>.
            </p>

            <div className="confirm-data-summary">
              <div>
                <span>Tracking Code:</span>
                <strong>{erasureConfirmModal.trackingId}</strong>
              </div>
              <div>
                <span>Data Principal:</span>
                <strong>{erasureConfirmModal.name}</strong>
              </div>
              <div>
                <span>Contact Phone:</span>
                <strong>{erasureConfirmModal.phone}</strong>
              </div>
              <div>
                <span>Registered Email:</span>
                <strong>{erasureConfirmModal.email}</strong>
              </div>
              <div>
                <span>Erasure Scope:</span>
                <strong style={{ color: "#dc2626" }}>Permanent CRM &amp; Lead Purge</strong>
              </div>
            </div>

            <div className="confirm-modal-actions">
              <button
                type="button"
                className="dpdp-btn dpdp-btn-secondary"
                onClick={() => setErasureConfirmModal(null)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn-danger-confirm"
                onClick={() => handleConfirmPermanentErasure(erasureConfirmModal)}
              >
                Yes, Permanently Delete Data 🗑️
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminPanel;
