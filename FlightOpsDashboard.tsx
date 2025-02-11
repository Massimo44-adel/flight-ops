import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";

export default function FlightOpsDashboard() {
  const [flights, setFlights] = useState([
    { id: 1, flightNumber: "PVT101", origin: "Cairo", destination: "Rome", status: "Scheduled" },
  ]);

  const [newFlight, setNewFlight] = useState({ flightNumber: "", origin: "", destination: "" });

  const addFlight = () => {
    if (!newFlight.flightNumber || !newFlight.origin || !newFlight.destination) return;
    setFlights([...flights, { id: flights.length + 1, ...newFlight, status: "Scheduled" }]);
    setNewFlight({ flightNumber: "", origin: "", destination: "" });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Flight Operations Dashboard</h1>
      
      <Card className="p-4 mb-6">
        <h2 className="text-lg font-semibold mb-3">Add New Flight</h2>
        <div className="flex space-x-2">
          <Input placeholder="Flight Number" value={newFlight.flightNumber} onChange={(e) => setNewFlight({ ...newFlight, flightNumber: e.target.value })} />
          <Input placeholder="Origin" value={newFlight.origin} onChange={(e) => setNewFlight({ ...newFlight, origin: e.target.value })} />
          <Input placeholder="Destination" value={newFlight.destination} onChange={(e) => setNewFlight({ ...newFlight, destination: e.target.value })} />
          <Button onClick={addFlight}>Add Flight</Button>
        </div>
      </Card>
      
      <Card>
        <CardContent>
          <h2 className="text-lg font-semibold mb-3">Live Flights</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Flight Number</TableHead>
                <TableHead>Origin</TableHead>
                <TableHead>Destination</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {flights.map((flight) => (
                <TableRow key={flight.id}>
                  <TableCell>{flight.flightNumber}</TableCell>
                  <TableCell>{flight.origin}</TableCell>
                  <TableCell>{flight.destination}</TableCell>
                  <TableCell>{flight.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
