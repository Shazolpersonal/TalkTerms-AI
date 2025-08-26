import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const proposals = [
  {
    item: "Base Salary",
    current_offer: "$110,000",
    proposal: "$125,000",
    rationale: "Aligns with market rate for senior-level roles and my demonstrated expertise.",
  },
  {
    item: "Severance Package",
    current_offer: "2 weeks",
    proposal: "4 weeks",
    rationale: "Provides a standard safety net in case of unforeseen restructuring.",
  },
  {
    item: "Non-Compete Clause",
    current_offer: "24 months, Global",
    proposal: "12 months, North America only",
    rationale: "Narrows the scope to be more reasonable and less restrictive on future opportunities.",
  },
];

const CounterProposals = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Counter-Proposals</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item</TableHead>
              <TableHead>Current Offer</TableHead>
              <TableHead>Your Proposal</TableHead>
              <TableHead>Rationale</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {proposals.map((proposal) => (
              <TableRow key={proposal.item}>
                <TableCell className="font-medium">{proposal.item}</TableCell>
                <TableCell>{proposal.current_offer}</TableCell>
                <TableCell className="font-semibold text-indigo-600">{proposal.proposal}</TableCell>
                <TableCell>{proposal.rationale}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default CounterProposals;
