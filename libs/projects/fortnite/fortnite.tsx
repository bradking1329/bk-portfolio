import { Box, Button, Card, CardActions, CardContent, Chip, Grid, Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { useCallback, useEffect, useMemo, useState } from "react";

export const FortnitePage = () => {
    const [playerData, setPlayerData] = useState<any[]>([]);
    const [playerDataLoading, setPlayerDataLoading] = useState<boolean>(true);
    const callApi = async () => {
        try {
            Promise.all(
                [
                    await fetch('https://fortnite-api.com/v2/stats/br/v2?name=derkindest0d&image=gamepad', { mode: 'cors', headers: { 'Authorization': ``}}).then(res => res.json()).then(data => data.data),
                    await fetch('https://fortnite-api.com/v2/stats/br/v2?name=theking1329&image=gamepad', { mode: 'cors', headers: { 'Authorization': ``}}).then(res => res.json()).then(data => data.data),
                    await fetch('https://fortnite-api.com/v2/stats/br/v2?name=emm1269&image=gamepad', { mode: 'cors', headers: { 'Authorization': ``}}).then(res => res.json()).then(data => data.data),
                    await fetch('https://fortnite-api.com/v2/stats/br/v2?name=barthunter&image=gamepad', { mode: 'cors', headers: { 'Authorization': ``}}).then(res => res.json()).then(data => data.data)
                ]
            ).then(playerResponses => {
                setPlayerData(playerResponses);
                setPlayerDataLoading(true);
            })
            // const res = await fetch('https://fortnite-api.com/v2/stats/br/v2?name=theking1329&image=gamepad', { mode: 'cors', headers: { 'Authorization': ``}}).then(res => res.json()).then(data => data.data)
            // console.log(res);
            // const res = await fetch('/api/fortnite').then(data => console.log(data));
            // const data = await res.json();
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        callApi();
        console.log(playerData);
    }, [])
      
      const rows = useMemo(() => [
        'solo', 'duo', 'squad', 'overall'
      ], []);

    return (
        <>
        <Grid 
            container
            spacing={1}
            
        >
        { playerData?.map((p, i) => {
            return (
                p === undefined ? <Skeleton width={500} height={500} key={i} /> :
                <Grid item key={p?.account?.id} xs={12} md={6}>
                <Card  sx={{ maxWidth: 600, marginTop: '12px' }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {p?.account?.name} <Chip color="secondary" label={`Lv. ${p?.battlePass?.level}`} />
                  </Typography>
                  {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <Chip label='123' />
                  </Typography> */}
                </CardContent>
                <CardActions>
                  <Button size="small">See More</Button>
                </CardActions>
                <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Mode</TableCell>
            <TableCell align="right">Matches</TableCell>
            <TableCell align="right">Wins</TableCell>
            <TableCell align="right">Kills</TableCell>
            <TableCell align="right">Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {`${row[0].toUpperCase()}${row.slice(1)}`}
              </TableCell>
              <TableCell align="right">{p?.stats?.all[row]?.matches}</TableCell>
              <TableCell align="right">{p?.stats?.all[row]?.wins}</TableCell>
              <TableCell align="right">{p?.stats?.all[row]?.kills}</TableCell>
              <TableCell align="right">{p?.stats?.all[row]?.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
              </Card>
              </Grid>
            )
            })
        }
        </Grid>
        </>
    );
}