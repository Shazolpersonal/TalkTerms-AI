import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const CounterProposals = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Counter-Proposals</CardTitle>
        </CardHeader>
        <CardContent>
          <p>No specific counter-proposals were generated.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Counter-Proposals</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Area</TableHead>
              <TableHead>Suggestion</TableHead>
              <TableHead>Rationale</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((proposal, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{proposal.area}</TableCell>
                <TableCell className="font-semibold text-indigo-600">{proposal.suggestion}</TableCell>
                <TableCell>{proposal.rationale}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

CounterProposals.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      area: PropTypes.string.isRequired,
      suggestion: PropTypes.string.isRequired,
      rationale: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CounterProposals;
